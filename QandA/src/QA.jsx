import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import QuestionsList from './components/QuestionsList.jsx';
import SearchQuestions from './components/SearchQuestions.jsx';
import QuestionModal from './components/QuestionModal.jsx';
import AnswerModal from './components/AnswerModal.jsx';

const Div = styled.div`
  // position: absolute;
  font-family: Helvetica, Arial, sans-serif;
  /* margin-left: auto;
  margin-right: auto; */
  display: grid;
  grid-template-columns: 1fr 2.2fr;
  left: 0;
  right: 0;
  width: 100%;
  height: 65%;
  font-family: sans-serif;
  padding-left: 20px;
  `;

const Logo = styled.section`
  font-family: 'Comfortaa', cursive;
  font-size: 30rem;
  color: #e71b1b;
  display: flex;
  flex-direction: column;
  margin-top: 28%;
  /* justify-content: space-between; */
  align-items: space-between;
  /* line-height: 1.8; */
  `;

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  `;

const QA = ({ product }) => {
  // const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  // const [product, setProduct] = useState(null);
  const [questions, setQuestions] = useState({});
  const [questionsId, setQuestionsId] = useState([]);
  const [answers, setAnswers] = useState({});
  const [answered, setAnswered] = useState(false);
  const [search, setSearch] = useState('');
  const [showQModal, setShowQModal] = useState(false);
  const [showAnsModal, setShowAnsModal] = useState(false);
  // const [showImgModal, setShowImgModal] = useState(false);
  const [helpfulQ, setHelpfulQ] = useState([]);
  const [reportQ, setReportQ] = useState([]);
  const [helpfulAnswer, setHelpfulAnswer] = useState([]);
  const [reportAnswer, setReportAnswer] = useState([]);
  const [targetQ, setTargetQ] = useState({});

  const qIds = [];

  const getQuestions = () => {
    axios.get(`questions/${product}`)
      .then((res) => {
        setQuestions(res.data);
        const questionData = res.data[product].results;
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
        const { data } = response;
        getQuestions();
        // setProducts(data);
        for (const productInfo of data) {
          if (productInfo.id === product) {
            setProductName(productInfo.name);
            break;
          }
        }
      })
      .catch((err) => {
        throw err;
      });
    // getQuestions();
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

  const addQuestion = (nickname, email, content) => {
    axios.post('/question', {
      body: content, name: nickname, email, product_id: product,
    })
      .then(() => {
        console.log('success posting question');
      })
      .catch((err) => {
        throw err;
      });
  };

  const addAnswer = (name, email, body, photos) => {
    axios.post(`/answer/${targetQ.question_id}`, {
      body, name, email, photos,
    })
      .then(() => {
        console.log('success posting answer', targetQ.question_id);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div>
      <Div>
        {/* {answers[questionsId[0]] && console.log(product)} */}
        <Logo>
          <strong>?</strong>
        </Logo>
        <section>
          {answers[questionsId[questionsId.length - 1]]
            ? <SearchQuestions search={search} setSearch={setSearch} />
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
                answers={answers}
                setAnswers={setAnswers}
                search={search}
                setShowQModal={setShowQModal}
                setShowAnsModal={setShowAnsModal}
                helpfulQ={helpfulQ}
                setHelpfulQ={setHelpfulQ}
                reportQ={reportQ}
                setReportQ={setReportQ}
                helpfulAnswer={helpfulAnswer}
                setHelpfulAnswer={setHelpfulAnswer}
                reportAnswer={reportAnswer}
                setReportAnswer={setReportAnswer}
                setTargetQ={setTargetQ}
              />
            )
            : <div>Loading...</div>}
        </section>
      </Div>
      {showQModal
        && (
          <QuestionModal
            showModal={showQModal}
            setShowModal={setShowQModal}
            productName={productName}
            addQuestion={addQuestion}
          />
        )}
      {showAnsModal
        && (
          <AnswerModal
            showModal={showAnsModal}
            setShowModal={setShowAnsModal}
            productName={productName}
            targetQ={targetQ}
            addAnswer={addAnswer}
          />
        )}
      <Global />
    </div>
  );
};

export default QA;
