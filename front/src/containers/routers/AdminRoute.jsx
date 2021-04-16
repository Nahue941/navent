import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AdminSkills from '../AdminSkills';
import EditTestView from '../EditTestView';
import CreateTestForm from '../CreateTest';
import CreateQuestion from '../../components/CreateQuestion';

const AdminRoute = () => {
  return (
    <div>
      <Switch>
        <Route path="/admin/skill/create/question/:testId" 
          render={({ match }) => 
            <CreateQuestion testId={match.params.testId} />} 
        />
        <Route path="/admin/skill/edit/:skillId" 
          render={({ match }) => 
            <EditTestView skillId={match.params.skillId}>{match.params.skillId}</EditTestView>} 
          />
        <Route path="/admin/skill/create/:skillId" 
          render={({ match }) => 
            <CreateTestForm skillId={match.params.skillId}/>}
        />
        <Route path="/admin/skill" 
          render={() => 
            <AdminSkills />} 
          />
        <Redirect exact from="/" to="admin/skill" />
      </Switch>
    </div>
  );
};

export default AdminRoute;
