import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import QuestionsList from './components/QuestionsList.jsx';
import SearchQuestions from './components/SearchQuestions.jsx';

const QA = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [questions, setQuestions] = useState({});
  const [questionsId, setQuestionsId] = useState([]);
  const [answers, setAnswers] = useState({});
  const [answered, setAnswered] = useState(false);

  const randomProduct = (response) => (
    response[Math.floor(Math.random() * response.length)].id
  );

  useEffect(() => {
    axios.get('/products')
      .then((response) => {
        setProducts(response.data);
        const randomId = randomProduct(response.data);
        setProduct(randomId);
        axios.get(`/questions/${randomId}`)
          .then((res) => {
            setQuestions(res.data);
            const questionData = res.data[randomId].results;
            const qIds = [];
            questionData.forEach((q) => {
              qIds.push(q.question_id);
            });
            setQuestionsId(qIds);
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const getAnswers = () => {
    questionsId.forEach((qId) => {
      axios.get(`./answers/${qId}`)
        .then((response) => {
          setAnswers(answers[qId] = response.data[qId]);
        })
        .catch((err) => {
          throw err;
        });
    });
  };

  if (questionsId.length > 0 && !answered) {
    getAnswers();
    setAnswered(true);
  }

  // useEffect(() => {
  //   // questionsId.forEach((question) => {
  //   //   axios.get(`/answers/${question.question_id}`)
  //   //     .then((response) => {
  //   //       setAnswers(response.data);
  //   //     })
  //   //     .catch((err) => {
  //   //       throw err;
  //   //     });
  //   // });
  //   console.log('hi');
  // }, questionsId);

  return (
    <div>
      {questions[product] !== undefined && console.log(questionsId)}
      {/* <h1>Questions & Answers</h1>
      {questions[product] !== undefined
        ? <SearchQuestions />
        : <div>Loading...</div>
      }
      <br />
      {questions[product] !== undefined
        ? <QuestionsList questions={questions[product]} />
        : <div>Loading...</div>
      } */}
    </div>
  );
};

ReactDOM.render(<QA />, document.getElementById('app'));
