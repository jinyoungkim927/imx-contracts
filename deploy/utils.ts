export function getIMXAddress(network: string) {
    switch (network) {
        case 'dev':
            return '0x3e6e01355bB66925a65D372bf9c9f3835d9964fA';
        case 'ropsten':
            return '0x4527be8f31e2ebfbef4fcaddb5a17447b27d2aef';
        case 'mainnet':
            return '0x5FDCCA53617f4d2b9134B29090C87D01058e27e9';
    }
    throw Error('Invalid network selected')
}

export function getEnv(name: string, def?: any): string {
    if (process.env.hasOwnProperty(name)) {
        return process.env[name] as string;
    };
    if (def) {
        return def;
    }
    throw new Error(`Required environment variable "${name}" not set`)
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
