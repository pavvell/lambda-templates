export async function handler(event: any) {
    const response = {
        statusCode: 200,
        body: `Hello from Lambda`,
    };

    return response;
}
