import { useState } from 'react';

export default function Task() {
    const [check, setCheck] = useState(false)
    const handleform = (e) => {
        e.preventDefault()
        console.log(check)
    }

    const obj = [
        { id: 1, name: 'kaushik', age: 20 },
        { id: 2, name: 'yash', age: 20 },
        { id: 3, name: 'vikas', age: 20 },
        { id: 4, name: 'krish', age: 20 },
        
    ]

    const [login, setlogin] = useState(false);
    const handLogin = () => {
        setlogin(true);
    };
    const handLogout = () => {
        setlogin(false);
    };

    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(prevState => !prevState);
    };
    return (
        <>
            <>
                <form onSubmit={handleform}>
                    <label htmlFor="">Checkbox</label>
                    <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} />
                    <br /><br />
                    <button>submit</button>
                </form>
                <br /><br />
            </>

            <h5>2.Create array & array of object using list & keys.</h5><br />
            <ul>
                {obj.map(item => (
                    <li key={item.id}>
                        <li><b>ID:</b> {item.id}</li>
                        <li><b>Name:</b> {item.name}</li>
                        <li><b>Age:</b> {item.age}</li>
                        <br />
                    </li>
                ))}
            </ul>


            <h5>3.Write a program to perform conditional rendering </h5>
            <>
                {login ? (
                    <>
                        <h4> Successful</h4>
                        <button className='btn_on' onClick={handLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <h4>Please Login</h4>
                        <button className='btn_off' onClick={handLogin}>Login</button>
                    </>
                )}
            </><br /><br />

            <h5>4. Write a program to perform toggle button [yes,Noo] </h5>
            <>
                <h5>Toggle Button </h5>
                <button className='btn_off' onClick={handleToggle}>
                    {isOn ? 'yess' : 'Noo'}
                </button>
            </>
        </>
    );
}