import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AdminSkills from '../AdminSkills';
import EditTestView from '../EditTestView';

const AdminRoute = () => {
  return (
    <div>
      <Switch>
        <Route path="/admin/skill/edit/:skillId" render={({match}) => <EditTestView jijo={match.params.skillId}>{match.params.skillId}</EditTestView>} />
        <Route path="/admin/skill/create/:skillId" render={({match}) => <p>{match.params.skillId}</p> } />
        <Route path="/admin/skill" render={() => <AdminSkills />} />
        <Redirect exact from="/" to="admin/skill" />
      </Switch>
    </div>
  );
};

export default AdminRoute;
