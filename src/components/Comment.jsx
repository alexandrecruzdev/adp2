// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import userPhoto from '../images/embalagem.jpg';
// import Auth from '../Auth';
// import { firestore } from '../config/firebase'; // Importa a instância do Firestore do arquivo firebase.js

// const Comment = ({ user, setUser }) => {
//     const [comments, setComments] = useState([]);
//     const [newComment, setNewComment] = useState('');
//     const userName = user ? user.displayName : '';

//     // Configurações do Slick Carousel
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 6000
//     };

//     // useEffect para buscar os comentários do Firestore quando o componente montar
//     useEffect(() => {
//         const fetchComments = async () => {
//             try {
//                 // Busca os comentários da coleção 'comments' no Firestore
//                 const snapshot = await firestore.collection('comments').get();
//                 const commentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//                 setComments(commentsData);
//             } catch (error) {
//                 console.error('Erro ao buscar comentários:', error);
//             }
//         };

//         fetchComments(); // Chamada da função de busca ao montar o componente
//     }, []); // O segundo argumento vazio assegura que esse efeito só é executado uma vez

//     // Função para lidar com a mudança no input de texto
//     const handleCommentChange = (event) => {
//         setNewComment(event.target.value);
//     };

//     // Função para adicionar o novo comentário
//     const addComment = async () => {
//         if (newComment.trim() !== '') {
//             const commentData = { userName: userName, comment: newComment }; // userName preenchido
//             try {
//                 // Adiciona o comentário ao Firestore
//                 await firestore.collection('comments').add(commentData);
//                 setNewComment('');
//             } catch (error) {
//                 console.error('Erro ao adicionar comentário:', error);
//             }
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center h-full m-8">
//             <div className="max-w-xl w-full mb-8">
//                 <Slider {...settings}>
//                     {comments.map((comment, index) => (
//                         <div key={comment.id} className="flex items-center justify-center bg-white rounded-lg p-4 shadow-md">
//                             <div className="flex items-center space-x-4">
//                                 <img src={userPhoto} alt={`${userName}'s photo`} className="w-10 h-10 rounded-full" />
//                                 <div>
//                                     <p className="font-bold">{comment.userName}</p>
//                                     <p className="text-gray-600">{comment.comment}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//             {user && (
//                 <div className="mb-4">
//                     <input type="text" value={newComment} onChange={handleCommentChange} placeholder="Digite seu comentário" className="border border-gray-300 rounded-md p-2" />
//                     <button onClick={addComment} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">Adicionar Comentário</button>
//                 </div>
//             )}
//             <Auth user={user} setUser={setUser} buttonText={'Entre com o Google para deixar seu depoimento'} />
//         </div>
//     );
// };

// export default Comment;

import firebase from 'firebase/app';
import 'firebase/firestore';
import React, { useState } from 'react';
import { firestore } from '../config/firebase'; // Importe o objeto firestore do seu arquivo firebase.js

const Comment = () => {
  const [comment, setComment] = useState('');

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await firestore.collection('comments').add({
        text: comment,
        timestamp: new Date()
      });
      console.log('Comentário gravado no Firebase:', comment);
      setComment('');
    } catch (error) {
      console.error('Erro ao gravar o comentário no Firebase:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
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
        Gravar no Firebase
      </button>
    </div>
  );
};

export default Comment;
