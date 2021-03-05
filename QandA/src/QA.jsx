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
  const [search, setSearch] = useState('');

  const randomProduct = (response) => (
    response[Math.floor(Math.random() * response.length)].id
  );

  const qIds = [];
  let randomId;
  useEffect(() => {
    axios.get('/products')
      .then((response) => {
        setProducts(response.data);
        randomId = randomProduct(response.data);
        return setProduct(randomId);
      })
      .then(() => axios.get(`questions/${randomId}`))
      .then((res) => {
        setQuestions(res.data);
        const questionData = res.data[randomId].results;
        questionData.forEach((q) => {
          qIds.push(q.question_id);
        });
        setQuestionsId(qIds);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const qAnswers = {};
  const promises = [];
  const getAnswers = () => {
    questionsId.forEach((qId) => {
      promises.push(
        axios.get(`./answers/${qId}`)
          .then((response) => {
            qAnswers[qId] = response.data;
          })
          .catch((err) => {
            throw err;
          }),
      );
    });
    Promise.all(promises)
      .then(() => {
        setAnswers(qAnswers);
      });
  };

  if (questionsId.length > 0 && !answered) {
    getAnswers();
    setAnswered(true);
  }

  const searchQA = (target) => {
    setSearch(target);
  };

  return (
    <div>
      {/* {answers[questionsId[0]] && console.log(answers)} */}
      <h1>Questions & Answers</h1>
      {answers[questionsId[questionsId.length - 1]]
        ? <SearchQuestions searchQA={searchQA} />
        // && (
        //   <QuestionsList
        //     questions={questions[product].results}
        //     questionsId={questionsId}
        //     answers={answers}
        //   />
        // )
        : <div>Loading...</div>}
      <br />
      {answers[questionsId[questionsId.length - 1]]
        ? (
          <QuestionsList
            productData={questions[product]}
            questionsId={questionsId}
            answers={answers}
            search={search}
          />
        )
        : <div>Loading...</div>}
    </div>
  );
};

ReactDOM.render(<QA />, document.getElementById('app'));
