const { DynamoDBClient, UpdateItemCommand } = require('@aws-sdk/client-dynamodb');

// Create an instance of the DynamoDB client
const client = new DynamoDBClient({ region: process.env.AWS_REGION });

// Function to update a DynamoDB item
async function updateItem(tableName, correlationId, taskId) {
    const params = {
        TableName: tableName,
        Key: {
            correlationId: { S: correlationId }
        },
        UpdateExpression: 'SET taskId = :taskId',
        ExpressionAttributeValues: {
            ':taskId': { S: taskId }
        }
    };

    const command = new UpdateItemCommand(params);

    try {
        const result = await client.send(command);
        return result.Attributes;
    } catch (error) {
        console.error('Error updating item:', error);
        throw error;
    }
}

module.exports = {
    updateItem
};