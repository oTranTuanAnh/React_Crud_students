import {useState} from "react";


const Students = ()=>{
    const [title, setTitle] = useState(['Id','Name', 'Age', "Email",'',''])
    const [studentList, setStudentList] = useState([
        {
            id:1,
            name: 'Nguyen Van A',
            age: 20,
            email: 'nguyenvana@gmail.com'
        },
        {
            id:2,
            name: 'Nguyen Van B',
            age: 22,
            email: 'nguyenvanb@gmail.com'
        },
        {
            id:3,
            name: 'Nguyen Van C',
            age: 15,
            email: 'nguyenvanc@gmail.com'
        }
    ])
    const [newId, setNewId] = useState("");
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const onChangeNewId = (e)=>{
        setNewId(e.currentTarget.value)
    }
    const onChangeNewName = (e)=>{
        setNewName(e.currentTarget.value)
    }
    const onChangeNewAge = (e)=>{
        setNewAge(e.currentTarget.value)
    }
    const onChangeNewEmail = (e)=>{
        setNewEmail(e.currentTarget.value)
    }
    const onClickAddStudent = () =>{
        let studentCopy = [...studentList]
        studentCopy.push({
            id: newId,
            name: newName,
            age: newAge,
            email: newEmail
        })
        setStudentList(studentCopy);
        setNewName('');
        setNewId('');
        setNewAge('');
        setNewEmail('')
    }
    const onClickUpdateStudent = ()=>{
        let index = studentList.findIndex(s=> s.id === editRow);
        let studentCopy = [...studentList]
        studentCopy[index]={
            id: newId,
            name: newName,
            age: newAge,
            email: newEmail
        }
        setStudentList(studentCopy);
        setNewName('');
        setNewId('');
        setNewAge('');
        setNewEmail('');
        setEditRow('')

    }
    const [editRow, setEditRow] = useState('');
    const onPressEditRow = (s)=>{
        setNewName(s.name);
        setNewId(s.id);
        setNewAge(s.age);
        setNewEmail(s.email);
        setEditRow(s.id)
    }
    const onPressDeleteRow = (id) =>{
        let studentCopy = [...studentList]
        let index = studentList.findIndex(s=> s.id === id);
        studentCopy.splice(index, 1);
        setStudentList(studentCopy);
    }
    return (
        <>
            <input type="text" placeholder={'Nhap Id'} disabled={editRow} value={newId} onChange={onChangeNewId}/> <br/>
            <input type="text" placeholder={'Nhap ten'} value={newName} onChange={onChangeNewName}/> <br/>
            <input type="text" placeholder={'Nhap tuoi'} value={newAge} onChange={onChangeNewAge}/><br/>
            <input type="text" placeholder={'Nhap email'} value={newEmail} onChange={onChangeNewEmail}/><br/>
            {
                editRow ? <button onClick={onClickUpdateStudent}>Edit</button> :
                    <button onClick={onClickAddStudent}>Add</button>
            }

            <table>
                <tr>
                {
                        title.map(t=>{
                            return <th>{t}</th>
                        })
                    }
                </tr>

                {
                    studentList.map(s=>{
                        return <tr>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.age}</td>
                            <td>{s.email}</td>
                            <td>
                                <button onClick={e => {
                                    onPressEditRow(s)
                                }}>Edit
                                </button>
                            </td>
                            <td>
                                <button onClick={e => {
                                    onPressDeleteRow(s.id)
                                }}>Delete
                                </button>
                            </td>
                        </tr>
                    })
                }

            </table>
        </>)
}
export default Students;