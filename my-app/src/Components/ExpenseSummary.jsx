function ExpenseSummary() {
    return(
        <div className="flex flex-col justify-center items-center gap-y-5">
            {/* big number */}
            <div className="flex flex-col gap-y-3 text-center">
                <p className="text-5xl">
                    $178.02
                </p>
                <p className="text-md">
                    monthly spending
                </p>
            </div>
            {/* breakdown */}
            <div className="w-1/2 h-48 max-h-1/2 overflow-y-auto pr-1">
                <table className="w-full border-separate border-spacing-1">
                    <thead className="bg-grey uppercase sticky top-0">
                        <tr>
                            <th>Expense</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>food</td>
                            <td>1 apr</td>
                            <td>$20</td>
                        </tr>
                        <tr>
                            <td>food</td>
                            <td>1 apr</td>
                            <td>$20</td>
                        </tr>
                        <tr>
                            <td>food</td>
                            <td>1 apr</td>
                            <td>$20</td>
                        </tr>
                        <tr>
                            <td>food</td>
                            <td>1 apr</td>
                            <td>$20</td>
                        </tr>
                        <tr>
                            <td>food</td>
                            <td>1 apr</td>
                            <td>$20</td>
                        </tr><tr>
                            <td>food</td>
                            <td>1 apr</td>
                            <td>$20</td>
                        </tr><tr>
                            <td>food</td>
                            <td>1 apr</td>
                            <td>$20</td>
                        </tr><tr>
                            <td>food</td>
                            <td>1 apr</td>
                            <td>$20</td>
                        </tr><tr>
                            <td>food</td>
                            <td>1 apr</td>
                            <td>$20</td>
                        </tr><tr>
                            <td>food</td>
                            <td>1 apr</td>
                            <td>$20</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ExpenseSummary;