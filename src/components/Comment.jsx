import React, { useEffect, useState } from 'react';
import db from '../config/firebase';
import { collection, onSnapshot, addDoc } from '@firebase/firestore';
import Slider from 'react-slick';

const Comment = ({ user }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000
  };

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'comments'), snapshot => {
      setComments(snapshot.docs.map(doc => doc.data()));
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleChange = event => {
    setComment(event.target.value);
  };

  const handleSubmit = async () => {
    if (comment.trim() === '') return;

    try {
      await addDoc(collection(db, 'comments'), { userName: user.displayName, text: comment });
      setComment('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="text-center">
        <Slider {...settings}>
          {comments.map((comentario, index) => (
            <div key={index} className="overflow-hidden">
              <div className="flex flex-col items-start">
                <p className="font-bold">{comentario.userName}</p>
                <p>{comentario.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <br />
      {user !== null && (
        <>
          <input
            type="text"
            value={comment}
            onChange={handleChange}
            placeholder="Digite seu comentário..."
            className="w-full border rounded-md px-4 py-2 mb-4"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
          >
            Salvar!
          </button>
        </>
      )}
    </div>
  );
};

export default Comment;
