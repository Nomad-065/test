import { Note } from "@/app/lib/definitions";
import React from "react"


interface NoteSummaryCardProps {
    todayCount: number;
    monthCount: number;
    totalCount: number;
}

const NoteSummaryCard: React.FC<NoteSummaryCardProps> = ({
    todayCount,
    monthCount,
    totalCount
}) => {
    return (
        <div className="flex justify-between mb-6 border shadow-sm p-10 rounded">
            <div className="flex items-center">
                <h3 className="text-xl font-semibold mr-2">Notes Today:</h3>
                <p className="text-xl">{todayCount}</p>
            </div>
            <div className="flex items-center">
                <h3 className="text-xl font-semibold mr-2">Monthly Notes:</h3>
                <p className="text-xl">{monthCount}</p>
            </div>
            <div className="flex items-center">
                <h3 className="text-xl font-semibold mr-2">Total Notes:</h3>
                <p className="text-xl">{totalCount}</p>
            </div>
        </div>
    )
}

export default NoteSummaryCard
