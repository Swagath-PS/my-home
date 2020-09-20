export const statusBadge = (id) => {

    switch (id) {
        case "Active": return "success";
        case "Pending": return "warning";
        case "Not available": return "danger";
        case "Sold": return "secondary";
        default: return "info";
    }
}