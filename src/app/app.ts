import {Component} from '@angular/core';
import {VisuallyJsModule} from '@visuallyjs/browser-ui-angular';
import diagramOptions from './diagram-options';
import modelOptions from './model-options';
import {CircuitDiagramInspector} from './inspector';

@Component({
  selector: 'app-root',
  imports: [VisuallyJsModule, CircuitDiagramInspector],
  templateUrl: './app.html'
})
export class App {

  options = diagramOptions
  modelOptions = modelOptions

}
