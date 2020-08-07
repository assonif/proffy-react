import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week-day">Dia da Semana</label>
            <input type="text" id="week-day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
      <main>
        <article>
          <header>
            <img src="" alt="" />
            <div>
              <strong>Fabio Furtado</strong>
              <span>Quimica</span>
            </div>
          </header>

          <p>
            shdfsoahdosajdlksajdlakjdslkjdlasjdlkajslkd
            <br />
            <br />
            spajdpojsapods posj dpoajdp ojspojspaojdposa jdpoj psjdpo jpsoaj
            posjpaojj pojsopj posjp ojspo jspoj pojspoajpoj poja pojp oajp
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$80,00</strong>
            </p>
            <button type="button">
              <img src={whatsAppIcon} alt="Entrar em contato" />
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
};

export default TeacherList;
