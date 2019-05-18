import { Type } from '@angular/core';

export interface DashboardWidget {
  type: Type<any>;
  data: {[key: string]: any};
}
