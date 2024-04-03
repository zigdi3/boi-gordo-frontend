import { environment } from '../../environments/environment';

export class APP_CONFIG {
  // Base URL
  static APP_VERSION: string = environment.AppVersion;
  static API_SERVER: string = environment.APIEndpoint;
  public static readonly PAGINATOR_PAGE_LENGHT = 1;
  public static readonly PAGINATOR_PAGE_SIZE = 10;
  public static readonly PAGINATOR_PAGE_ATUAL = 1;
}
