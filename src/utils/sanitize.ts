export const sanitizeInput = (input: string): string => {
    const sanitized = input.replace(/<[^>]*>/g, '');
    return sanitized.trim();
};