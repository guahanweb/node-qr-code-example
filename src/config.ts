function loadConfiguration() {
    const port = loadFromEnv('PORT', 3000);

    return { port };
}

function loadFromEnv(variable: string, defaultValue?: number|string|boolean|null|undefined) {
    const value = process.env && process.env[variable];
    return value || defaultValue;
}

export const configuration = loadConfiguration();
