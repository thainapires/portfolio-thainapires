const logError = (error: any, endpoint: string, location: string): void => {
    console.error("🚨 Unexpected Error 🚨", {
        endpoint: endpoint,
        message: error instanceof Error ? error.message : "Unknown error occurred",
        location: location,
        timestamp: new Date().toISOString(),
        stacktTrace: error instanceof Error ? error.stack : "No stack trace available",
    });
}