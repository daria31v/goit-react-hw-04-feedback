import PropTypes from 'prop-types'

import {Title} from './Section.styled'

export const Section = ({title, children}) => {
    return (
        <>
        <Title> {title}</Title>
        {children}
        </>
   )
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
}.isRequired