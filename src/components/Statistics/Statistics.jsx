import { StatItem, StatList } from './Statistics.styled';
// import PropTypes from 'prop-types';

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Statistics = data => {
  return (
    <section className="statistics">
      {data.title && <h2 className="title">{data.title}</h2>}

      <StatList>
        {data.stats.map(stat => (
          <StatItem key={stat.id} style={{ backgroundColor: randomColor() }}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </StatItem>
        ))}
      </StatList>
    </section>
  );
};

// Statistics.propTypes = {};

export default Statistics;
