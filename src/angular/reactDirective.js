import app from '../../main'
import React from "react";
import ReactDOM from "react-dom";
import FormBuilder from "react-forms-builder"

const reactDirective = app.directive('reactDirective', function() {
  return {
      template: '<div id="reactapp" class="react-part"></div>',
      scope: {
        dataUpdater:'&updater'
      },
      link: function(scope, el, attrs){
            
            const reactapp = document.getElementById('reactapp')
            const wrapper = (data) => scope.dataUpdater({ data });
            ReactDOM.render(
                <FormBuilder.ReactFormBuilder dataUpdater={wrapper} />
                , reactapp);
        }
    }
})

export default reactDirective
