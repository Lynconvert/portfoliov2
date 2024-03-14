import React, { useState, useEffect } from 'react';

function CommentBox() {
    /*พยายามดึงข้อมูลจาก localStorage localStorage เป็นที่เก็บข้อมูลของ Browser ที่ยังคงอยู่แม้ปิดแท็บ getItem('comments') 
    พยายามดึงข้อมูลที่เก็บไว้ภายใต้ key comments ถ้าดึงข้อมูลจาก localStorage สำเร็จ จะแปลงข้อมูล JSON นั้นกลับเป็น Object*/


    const [comments, setComments] = useState(() => JSON.parse(localStorage.getItem('comments')) || []);
    const [newComment, setNewComment] = useState('');


    /*ตรวจสอบว่า newComment มีค่าว่างเปล่าหรือไม่ ถ้า newComment ไม่ใช่ค่าว่างเปล่า เพิ่ม newComment ลงในอาร์เรย์ comments 
    โดยใช้ spread operator แล้วล้างค่า newComment ให้เป็นค่าว่างเปล่า*/

    /* ... เป็น Operator พิเศษใน JavaScript ที่ช่วยในการขยายองค์ประกอบออกมาเป็นรายการโดยไม่ต้องเขียนวนซ้ำ(loop)*/


    const handleAddComment = () => {
        if (newComment !== '') {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };


    /*ประกาศฟังก์ชัน handleDeleteComment ที่รับพารามิเตอร์ index เพื่อระบุตำแหน่งของความคิดที่ต้องการลบออกจากรายการความคิด 
    เปลี่ยนแปลง state comments โดยใช้ setComments ใช้ filter เพื่อสร้างอาร์เรย์ใหม่ที่ประกอบด้วยเฉพาะความคิดที่ต่างจากตำแหน่งที่ระบุในพารามิเตอร์ index*/

    const handleDeleteComment = (index) => {
        setComments(comments.filter((_, i) => i !== index));
    };
    /*ประกาศ Hook useEffect ของ React เมื่อมีการเปลี่ยนแปลงใน comments, เราจะทำการเซ็ตค่าใน local storage โดยใช้ localStorage.setItem  
    จะเซฟค่า comments ลงใน local storage โดยแปลง comments เป็น JSON string ก่อนเพื่อที่จะเก็บไว้ใน local storage. 
    ระบุ dependencies คือ comments. ดังนั้น ฟังก์ชันที่กำหนดใน useEffect จะถูกเรียกเมื่อ comments เปลี่ยนแปลง*/

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);



    return (
        <section id='comment'>
            <h1 className="title">Comment</h1>
            <div className='details-container'>
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}  /* เรียกใช้ฟังก์ชัน setNewComment เพื่ออัปเดต state newComment ด้วยค่าที่ผู้ใช้ป้อนเข้ามาใน input ซึ่งเป็นค่าที่ถูกดึงมาจาก e.target.value*/
                />
                <button onClick={handleAddComment}>Add Comment</button>
                <ul className='comment-list'>
                    {comments.map((comment, index) => (
                        <li className='comment-item' key={index}>
                            {comment}
                            <button onClick={() => handleDeleteComment(index)}>Delete</button> {/* สร้างปุ่มลบมื่อ onClick ฟังก์ชัน handleDeleteComment จะถูกเรียกใช้ โดยมี index เป็นพารามิเตอร์*/}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default CommentBox;
