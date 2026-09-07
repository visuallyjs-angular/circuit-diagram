import { Component, Input, inject } from '@angular/core';
import { VisuallyJsModule, VisuallyJsService } from '@visuallyjs/browser-ui-angular';
import { isNode, Vertex } from '@visuallyjs/browser-ui';

@Component({
  selector: 'shape-properties-inspector',
  standalone: true,
  imports: [VisuallyJsModule],
  template: `
    @if (properties.length > 0) {
      @for (prop of properties; track prop.id) {
        <div class="vjs-inspector-field">
          <label>{{ prop.label || prop.id }}</label>
          
          @switch (prop.type) {
            @case ('string') {
              @if (prop.values && prop.values.length > 0) {
                <select [attr.vjs-att]="prop.id">
                  @for (v of prop.values; track v) {
                    <option [value]="v">{{ v }}</option>
                  }
                </select>
              } @else {
                <input type="text" [attr.vjs-att]="prop.id" [placeholder]="prop.description || ''" />
              }
            }

            @case ('number') {
              @if (prop.values && prop.values.length > 0) {
                <select [attr.vjs-att]="prop.id">
                  @for (v of prop.values; track v) {
                    <option [value]="v">{{ v }}</option>
                  }
                </select>
              } @else {
                <input type="number" [attr.vjs-att]="prop.id" [placeholder]="prop.description || ''" [min]="prop.min" [max]="prop.max" />
              }
            }

            @case ('boolean') {
              <select [attr.vjs-att]="prop.id">
                <option value=""></option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            }

            @default {
              <input type="text" [attr.vjs-att]="prop.id" [placeholder]="prop.description || ''" />
            }
          }

          @if (prop.description) {
            <div class="vjs-field-desc">{{ prop.description }}</div>
          }
        </div>
      }
    }
  `
})
export class ShapePropertiesInspector {
  @Input() vertex!: Vertex;
  
  $vjs = inject(VisuallyJsService);

  get properties() {
    if (!this.vertex || !isNode(this.vertex)) return [];

    const { type, category } = this.vertex.data;
    if (!type || !category) return [];

    const surface = this.$vjs.surface();
    if (!surface) return [];

    const shapeLibrary = surface.getShapeLibrary();
    const shapeSet = shapeLibrary.getShapeSet(category);
    if (!shapeSet) return [];

    const shapeDef = shapeSet.shapes.find((s: any) => s.type === type);
    if (!shapeDef || !shapeDef.properties) return [];

    return shapeDef.properties;
  }
}
