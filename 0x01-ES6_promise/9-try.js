export default function guardrail(mathFunction) {
    const response = [];

    try {
        response.push(mathFunction());
    } catch (error) {
        response.push(error.toString());
    } finally {
        response.push('Guardrail was processed');
    }
    return response;
}