import React from 'react'

export default props =>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mt-3">
  <a className="navbar-brand" href="/">
    <i className="fa fa-calendar-check-o"></i> TodoApp
  </a>
  <div className="collapse navbar-collapse" id="navbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/todos">Tarefas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">Sobre</a>
      </li>
    </ul>
  </div>
</nav>