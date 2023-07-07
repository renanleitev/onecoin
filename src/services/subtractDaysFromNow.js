export default function subtractDaysFromNow(days) {
    const date = new Date();
    // Subtraindo dias da data atual
    date.setDate(date.getDate() - days);
    // Deixando a data em português e convertendo para string
    return date.toLocaleDateString().toString();
}