import { Option } from './Statistics.styled';
import PropTypes from 'prop-types'
import { Notification } from 'components/Statistics/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    {total === 0 ? (
      <Notification message="There is no feedback" />
    ) : (
      <>
        <Option>Good: {good}</Option>
        <Option>Neutral: {neutral} </Option>
        <Option>Bad: {bad} </Option>
        <Option>Total: {total} </Option>
        <Option>Positive feedback: {positivePercentage} %</Option>
      </>
    )}
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}