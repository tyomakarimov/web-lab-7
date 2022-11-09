import { Component } from 'react';

import styles from './styles.module.css';

class Content extends Component {
  state = {
    birthClassNames: [styles.information],
    educationClassNames: [styles.information],
  };

  toggleBirth() {
    if (this.state.birthClassNames.length === 1) {
      this.setState({ birthClassNames: [styles.information, styles.birth] });
    } else this.setState({ birthClassNames: [styles.information] });
  }

  toggleEducation() {
    if (this.state.educationClassNames.length === 1) {
      this.setState({ educationClassNames: [styles.information, styles.education] });
    } else this.setState({ educationClassNames: [styles.information] });
  }

  render() {
    return (
      <>
        <p className={this.state.birthClassNames.join(' ')} onClick={this.toggleBirth.bind(this)}>
          Дата й місце народження: 17 лютого 2002 року, місто Біла Церква
        </p>
        <p
          className={this.state.educationClassNames.join(' ')}
          onClick={this.toggleEducation.bind(this)}
        >
          Освіта: Білоцерківська загальноосвітня школа I-III ступенів №18, Національний технічний
          університет України "Київський політехнічний інститут імені Ігоря Сікорського"
        </p>

        <p>Хобі:</p>
        <ul>
          <li>Перегляд фільмів та серіалів</li>
          <li>Настільні ігри</li>
          <li>Стрибки на батуті</li>
        </ul>

        <p>Улюблені фільми:</p>
        <ol>
          <li>Сяйво (1980)</li>
          <li>Час (2011)</li>
          <li>Паразити (2019)</li>
        </ol>

        <p>
          Львів — місто в Україні, адміністративний центр області, агломерації, району, міської
          громади, національно-культурний та освітньо-науковий осередок країни, великий промисловий
          центр і транспортний вузол, вважається столицею Галичини та центром Західної України.
        </p>
      </>
    );
  }
}

export default Content;
