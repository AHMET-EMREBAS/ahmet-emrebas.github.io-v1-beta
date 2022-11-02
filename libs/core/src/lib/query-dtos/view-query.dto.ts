import { BooleanProperty } from 'swagger-property';

export class ViewQueryDto {
  /**
   * Get data from view
   */
  @BooleanProperty()
  view: boolean;
}
