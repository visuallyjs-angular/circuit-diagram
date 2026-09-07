import {InspectorComponent, VisuallyJsModule} from '@visuallyjs/browser-ui-angular';
import {Component} from '@angular/core';
import {ShapePropertiesInspector} from './shape-properties-inspector';
import {Node, Group} from "@visuallyjs/browser-ui";

@Component({
  selector:"circuit-diagram-inspector",
  imports:[VisuallyJsModule, ShapePropertiesInspector],
  template:`
    @if(currentObjectType === "Node") {
      <div class="vjs-inspector-pane">
        <div class="vjs-inspector-header">
            <div class="vjs-inspector-title">
                <h3>{{asNode(currentObj).data['label'] || asNode(currentObj).data['type']}}</h3>
            </div>
            <button class="close-button" (click)="model().clearSelection()">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor"
                     stroke-width="2" fill="none" stroke-linecap="round"
                     stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>

        <div class="vjs-inspector-properties">
            <div class="vjs-inspector-field">
                <label>Label</label>
                <input type="text" vjs-att="label" placeholder="Label"/>
            </div>
            
            <shape-properties-inspector [vertex]="asNode(currentObj)"></shape-properties-inspector>
        </div>
      </div>
    }
  `
})
export class CircuitDiagramInspector extends InspectorComponent<Node | Group> {
  asNode(obj: any): Node {
    return obj as Node;
  }
}
