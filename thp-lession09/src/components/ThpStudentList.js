import React from 'react';

export default function ThpStudentList({ renderThpStudentList }) {
    console.log("Data:", renderThpStudentList);
    let thpElement = renderThpStudentList.map((thpStudent, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{thpStudent.thpId}</td>
                <td>{thpStudent.thpName}</td>
                <td>{thpStudent.thpAge}</td>
                <td>{thpStudent.thpPhone}</td>
                <td>{thpStudent.thpEmail}</td>
                <td>{thpStudent.thpStatus}</td>
                <td>
                    edit/delete
                </td>
            </tr>
        );
    });

    return (
        <div>
            <h2>Danh sách sinh viên</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã SV</th>
                        <th scope="col">Họ tên</th>
                        <th scope="col">Tuổi</th>
                        <th scope="col">Điện thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {thpElement}
                </tbody>
            </table>
        </div>
    );
}
