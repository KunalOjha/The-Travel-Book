import { enableProdMode, NgZone } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { auguryBootstrap } from "@augury/core";
import { PerformanceProfilerPlugin } from "@augury/performance-profiler-plugin";

if (environment.production) {
  enableProdMode();

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
} else
  auguryBootstrap({
    ngModule: AppModule,
    platform: platformBrowserDynamic,
    NgZone,
    plugins: [new PerformanceProfilerPlugin()]
  });
