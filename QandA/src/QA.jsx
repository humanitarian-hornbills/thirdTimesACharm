import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ReactDOM from 'react-dom';
import axios from 'axios';
import QuestionsList from './components/QuestionsList.jsx';
import SearchQuestions from './components/SearchQuestions.jsx';
import QuestionModal from './components/QuestionModal.jsx';
import AnswerModal from './components/AnswerModal.jsx';

const Div = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  left: 0;
  right: 0;
  width: 70%;
  height: 65%;
  font-family: sans-serif;
  padding-left: 20px;
  `;

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  `;

const QA = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [questions, setQuestions] = useState({});
  const [questionsId, setQuestionsId] = useState([]);
  const [answers, setAnswers] = useState({});
  const [answered, setAnswered] = useState(false);
  const [search, setSearch] = useState('');
  const [showQModal, setShowQModal] = useState(false);
  const [showAnsModal, setShowAnsModal] = useState(false);
  const [clickedAnsHelpful, setClickedAnsHelpful] = useState([]);
  const [clickedReport, setClickedReport] = useState([]);
  const [targetQ, setTargetQ] = useState(null);

  const randomProduct = (response) => (
    response[Math.floor(Math.random() * response.length)].id
  );

  const qIds = [];
  let randomId;

  const getQuestions = () => {
    axios.get(`questions/${randomId}`)
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
  };

  useEffect(() => {
    axios.get('/products')
      .then((response) => {
        setProducts(response.data);
        randomId = randomProduct(response.data);
        return setProduct(randomId);
      })
      .then(() => {
        getQuestions();
      })
      // axios.get(`questions/${randomId}`))
      // .then((res) => {
      //   setQuestions(res.data);
      //   const questionData = res.data[randomId].results;
      //   questionData.forEach((q) => {
      //     qIds.push(q.question_id);
      //   });
      //   setQuestionsId(qIds);
      // })
      .catch((err) => {
        throw err;
      });
  }, []);

  const qAnswers = {};
  const promises = [];
  const getAnswers = () => {
    questionsId.forEach((qId) => {
      promises.push(
        axios.get(`/answers/${qId}`)
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

  const addQuestion = (nickname, email, content) => {
    axios.post('/question', {
      body: content, name: nickname, email, product_id: product,
    })
      .then(() => {
        // getQuestions();
        console.log('success posting question');
      })
      .catch((err) => {
        throw err;
      });
  };

  const addAnswer = (qId, nickname, email, content, photos) => {
    axios.post(`/answer/${qId}`, {
      body: content, name: nickname, email, photos,
    })
      .then(() => {
        console.log('success posting answer');
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <>
      <Div>
        {answers[questionsId[0]] && console.log(product)}
        <strong>Questions & Answers</strong>
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
              setAnswers={setAnswers}
              search={search}
              setShowQModal={setShowQModal}
              setShowAnsModal={setShowAnsModal}
              clickedAnsHelpful={clickedAnsHelpful}
              setClickedAnsHelpful={setClickedAnsHelpful}
              clickedReport={clickedReport}
              setClickedReport={setClickedReport}
              setTargetQ={setTargetQ}
            />
          )
          : <div>Loading...</div>}
      </Div>
      {showQModal
        && (
          <QuestionModal
            showModal={showQModal}
            setShowModal={setShowQModal}
            addQuestion={addQuestion}
          />
        )}
      {showAnsModal
        && (
          <AnswerModal
            showModal={showAnsModal}
            setShowModal={setShowAnsModal}
            addAnswer={addAnswer}
          />
        )}
      <Global />
    </>
  );
};

ReactDOM.render(<QA />, document.getElementById('app'));
