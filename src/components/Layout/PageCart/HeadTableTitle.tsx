import React from 'react';

export const HeadTableTitle = () => {
    return (
        <>
            <thead className="border-b bg-gray-800 text-left mobile:hidden xl:table-header-group">
            <tr >
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                    Товар
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                    Производитель
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                    Количество
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                    Стоимость
                </th>
            </tr>
            </thead>
        </>
    );
};

