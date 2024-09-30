import React, { useState } from "react";

interface SortableTableProps {
    headers: { key: string; label: string }[];
    data: any[];
}

const SortableTable: React.FC<SortableTableProps> = ({ headers, data }) => {
    const [sortKey, setSortKey] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    // Sort data based on current sort key and order
    const sortedData = [...data].sort((a, b) => {
        if (!sortKey) return 0; // If no sort key, return original order
        if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
        return 0;
    });

    const handleSort = (key: string) => {
        const isAsc = sortKey === key && sortOrder === "asc";
        const newSortOrder = isAsc ? "desc" : "asc";
        setSortKey(key);
        setSortOrder(newSortOrder);
    };

    return (
        <table>
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={header.key} onClick={() => handleSort(header.key)}>
                            {header.label} {sortKey === header.key ? (sortOrder === "asc" ? "⬆" : "⬇") : ""}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {sortedData.map((row, i) => (
                    <tr key={i}>
                        {headers.map((header) => (
                            <td key={header.key}>{row[header.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SortableTable;
