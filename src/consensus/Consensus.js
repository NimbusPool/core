class Consensus extends Observable {

    constructor(broadcastChannel, blockchain, mempool) {
        super();
        this._agents = {};
        this._state = Consensus.State.UNKNOWN;

        // Create a P2PAgent for each peer that connects.
        broadcastChannel.on('peer-joined', peer => {
            const agent = new P2PAgent(peer, blockchain, mempool);
            this._agents[peer.peerId] = agent;
            agent.on('consensus', () => this._onPeerConsensus(agent));
        });
        broadcastChannel.on('peer-left', peerId => {
            delete this._agents[peerId];
        });

        // Notify peers when our blockchain head changes.
        blockchain.on('head-changed', head => {
            for (let peerId in this._agents) {
                this._agents[peerId].relayBlock(head);
            }
        });

        // Relay new (verified) transactions to peers.
        mempool.on('transaction-added', tx => {
            for (let peerId in this._agents) {
                this._agents[peerId].relayTransaction(tx);
            }
        });
    }

    _onPeerConsensus(agent) {
        // TODO Derive consensus state from several peers.
        this._state = Consensus.State.ESTABLISHED;
        this.fire('established');

        console.log('Consensus established');
    }

    get state() {
        return this._state;
    }

    get established() {
        return this._state === Consensus.State.ESTABLISHED;
    }

    // TODO confidence level?
}
Consensus.State = {};
Consensus.State.UNKNOWN = 'unknown';
Consensus.State.ESTABLISHED = 'established';
