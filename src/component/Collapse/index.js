import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

const CollapseComponent = ({
  isExpanded,
  onToggle,
  title,
  ayat,
  arti,
  latin,
}) => {
  return (
    <Collapse
      isExpanded={isExpanded}
      onToggle={onToggle}
      style={styles.container}>
      <CollapseHeader>
        <View style={styles.collapseheader(isExpanded)}>
          <Text style={styles.textcollapseheader}>{title}</Text>
        </View>
      </CollapseHeader>
      <CollapseBody>
        <View style={styles.collapsebody}>
          <View>
            <Text style={styles.texttitle}>Ayat :</Text>
            <Text style={styles.textquran}>{ayat}</Text>
          </View>
          <View>
            <Text style={styles.texttitle}>Latin :</Text>
            <Text style={styles.textlatin}>"{latin}"</Text>
          </View>
          <View>
            <Text style={styles.texttitle}>Artinya :</Text>
            <Text style={styles.textlatin}>"{arti}"</Text>
          </View>
        </View>
      </CollapseBody>
    </Collapse>
  );
};

export default CollapseComponent;
