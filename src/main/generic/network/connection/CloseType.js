class CloseType {
    /**
     * @param {number} closingType
     * @return {boolean}
     */
    static isBanningType(closingType){
        return closingType >= 100 && closingType < 200;
    }

    /**
     * @param {number} closingType
     * @return {boolean}
     */
    static isFailingType(closingType){
        return closingType >= 200;
    }
}

// Regular Close Types

CloseType.GET_BLOCKS_TIMEOUT = 1;
CloseType.GET_CHAIN_PROOF_TIMEOUT = 2;
CloseType.GET_ACCOUNTS_TREE_CHUNK_TIMEOUT = 3;
CloseType.GET_HEADER_TIMEOUT = 4;
CloseType.INVALID_ACCOUNTS_TREE_CHUNK = 5;
CloseType.ACCOUNTS_TREE_CHUNCK_ROOT_HASH_MISMATCH = 6;
CloseType.INVALID_CHAIN_PROOF = 7;
CloseType.RECEIVED_WRONG_HEADER = 8;
CloseType.DID_NOT_GET_REQUESTED_HEADER = 9;

CloseType.GET_ACCOUNTS_PROOF_TIMEOUT = 11;
CloseType.GET_TRANSACTIONS_PROOF_TIMEOUT = 12;
CloseType.GET_TRANSACTION_RECEIPTS_TIMEOUT = 13;
CloseType.INVALID_ACCOUNTS_PROOF = 14;
CloseType.ACCOUNTS_PROOF_ROOT_HASH_MISMATCH = 15;
CloseType.INCOMPLETE_ACCOUNTS_PROOF = 16;
CloseType.INVALID_BLOCK = 17;
CloseType.INVALID_CHAIN_PROOF = 18;
CloseType.INVALID_TRANSACTION_PROOF = 19;
CloseType.INVALID_BLOCK_PROOF = 20;

CloseType.SENDING_PING_MESSAGE_FAILED = 22;
CloseType.SENDING_OF_VERSION_MESSAGE_FAILED = 23;

CloseType.DUPLICATE_CONNECTION = 30;
CloseType.PEER_IS_BANNED = 31;
CloseType.CONNECTION_LIMIT_PER_IP = 32;
CloseType.MANUAL_NETWORK_DISCONNECT  = 33;
CloseType.MANUAL_WEBSOCKET_DISCONNECT  = 34;
CloseType.MAX_PEER_COUNT_REACHED  = 35;

CloseType.PEER_CONNECTION_RECYCLED  = 36;
CloseType.PEER_CONNECTION_RECYCLED_INBOUND_EXCHANGE  = 37;

CloseType.CHANNEL_CLOSING = 41;

// Ban Close Types

CloseType.RECEIVED_INVALID_BLOCK = 100;
CloseType.BLOCKCHAIN_SYNC_FAILED = 101;
CloseType.RECEIVED_INVALID_HEADER = 102;
CloseType.RECEIVED_TRANSACTION_NOT_MATCHING_OUR_SUBSCRIPTION = 103;
CloseType.ADDR_MESSAGE_TOO_LARGE = 104;
CloseType.INVALID_ADDR = 105;
CloseType.ADDR_NOT_GLOBALLY_REACHABLE = 106;
CloseType.INVALID_SIGNAL_TTL = 107;
CloseType.INVALID_SIGNATURE = 108;
CloseType.INCOMPATIBLE_VERSION = 109;
CloseType.INVALID_PUBLIC_KEY_IN_VERACK_MESSAGE = 110;
CloseType.INVALID_SIGNATURE_IN_VERACK_MESSAGE  = 111;
CloseType.DIFFERENT_GENESIS_BLOCK = 112;
CloseType.INVALID_PEER_ADDRESS_IN_VERSION_MESSAGE = 113;
CloseType.UNEXPECTED_PEER_ADDRESS_IN_VERSION_MESSAGE = 114;

// Fail Close Types

CloseType.CLOSED_BY_REMOTE = 200;
CloseType.PING_TIMEOUT = 201;
CloseType.CONNECTION_FAILED = 202;
CloseType.NETWORK_ERROR = 203;
CloseType.VERSION_TIMEOUT = 204;
CloseType.VERACK_TIMEOUT = 205;
CloseType.ABORTED_SYNC = 206;
CloseType.FAILED_TO_PARSE_MESSAGE_TYPE = 207;

Class.register(CloseType);
