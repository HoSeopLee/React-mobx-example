import { inject, observer } from 'mobx-react';
import React, { useCallback } from 'react';
import Person from '../components/Person';

const PersonContainer = ({ personStore }) => {
  const age10 = personStore.age10;
  const plus = useCallback(() => {
    personStore.plus();
  });
  return <Person age10={age10} plus={plus} />;
};

export default inject('personStore')(observer(PersonContainer));
