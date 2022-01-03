/* eslint-disable vue/valid-v-bind */
<template>
  <v-col :cols="mini ? 10 : 9"  >
    <v-app-bar class="rounded-lg" color="white">
      <App-Bar-Left></App-Bar-Left>

      <v-spacer></v-spacer>
      <v-btn icon small>
        <v-icon>fa-light fa-magnifying-glass</v-icon>
      </v-btn>

      <App-Bar-Shop></App-Bar-Shop>

      <App-Bar-Notification></App-Bar-Notification>

      <div>
        <h5>Davood Khani</h5>
        <p>admin</p>
      </div>

      <App-Bar-Profile></App-Bar-Profile>
    </v-app-bar>
    <v-content class="mt-7 d-flex">
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="4" class="">
          <v-card width="385px" class="rounded-md d-flex pa-2">
            <div>
              <v-card-title class="text-p"> OVERLINE </v-card-title>
              <v-card-subtitle> You have won gold medal </v-card-subtitle>
              <v-card-text>
                <a class="display-1"> $48.9k </a>
              </v-card-text>
              <v-card-actions>
                <v-btn color=" deep-purple lighten-1 white--text">
                  View Sales
                </v-btn>
              </v-card-actions>
            </div>

            <div>
              <v-img
                width="100%"
                style="left: 90px"
                src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/badge.0fa134b5.svg"
              >
              </v-img>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="8">
          <v-card class="rounded-md pa-2">
            <div class="justify-space-between d-flex">
              <span class="headline">Statistics</span>
              <span class="subtitle-1">Updated 1 month ago</span>
            </div>
            <div class="d-flex">
              <div class="col-xl-6 mb-2 d-flex" style="padding: 3rem 2rem">
                <v-icon
                  style="
                    font-size: 30px !important;
                    padding: 3.7rem;
                    background-color: rgba(115, 103, 240, 0.12);
                  "
                  x-large
                  color="#7367f0"
                  class="pa-2 rounded-circle mr-3"
                  >fa-light fa-wave-pulse</v-icon
                >
                <div>
                  <h4 class="headline">230k</h4>
                  <span class="subtitle-1">Sales</span>
                </div>
              </div>
              <div class="col-xl-6 mb-2 d-flex" style="padding: 3rem 2rem">
                <v-icon
                  style="
                    font-size: 30px !important;
                    padding: 15px !important;
                    background-color: rgba(0, 207, 232, 0.12);
                  "
                  x-large
                  color="#00cfe8"
                  class="pa-2 rounded-circle mr-3"
                  >fa-light fa-user</v-icon
                >
                <div>
                  <h4 class="headline">230k</h4>
                  <span class="subtitle-1">Sales</span>
                </div>
              </div>
              <div class="col-xl-6 mb-2 d-flex" style="padding: 3rem 2rem">
                <v-icon
                  style="
                    font-size: 30px !important;
                    padding: 3.7rem;
                    background-color: rgba(234, 84, 85, 0.12);
                  "
                  x-large
                  color="#ea5455"
                  class="pa-2 rounded-circle mr-3"
                  >fa-light fa-child</v-icon
                >
                <div>
                  <h4 class="headline">230k</h4>
                  <span class="subtitle-1">Sales</span>
                </div>
              </div>
              <div class="col-xl-6 mb-2 d-flex" style="padding: 3rem 2rem">
                <v-icon
                  style="
                    font-size: 30px !important;
                    padding: 3.7rem;
                    background-color: rgba(40, 199, 111, 0.12);
                  "
                  x-large
                  color="#28c76f"
                  class="pa-2 rounded-circle mr-3"
                  >fa-light fa-dollar-sign</v-icon
                >
                <div>
                  <h4 class="headline">230k</h4>
                  <span class="subtitle-1">Sales</span>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="m-0" style="margin: 0px">
        <v-col cols="12" sm="6" md="4" class="pa-0">
          <div class="d-flex">
            <v-card class="rounded-md pa-1 pr-0 mt-7 mr-6" width="385px">
              <v-card-title>Orders </v-card-title>
              <v-card-subtitle> 2,76k </v-card-subtitle>
              <div id="chart">
                <apexchart
                  width="350px"
                  type="bar"
                  :options="options"
                  :series="series"
                />
              </div>
            </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="8" class="pa-0">
          <v-card class="rounded-md pa-2 mt-7">
            <apexchart
              type="bar"
              height="290"
              :options="chartOptions"
              :series="series2"
            ></apexchart>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="m-0" style="margin: 0px">
        <v-col cols="12" sm="6" md="4" class="pa-0">
          <div class="d-flex">
            <v-card class="rounded-md pa-1 pr-0 mt-7 mr-6" width="385px">
              <v-card-title>Orders </v-card-title>
              <v-card-subtitle> 2,76k </v-card-subtitle>
              <div id="chart">
                <apexchart
                  width="350px"
                  type="bar"
                  :options="options"
                  :series="series"
                />
              </div>
            </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="8" class="pa-0">
          <v-card class="rounded-md pa-2 mt-7">
sdfsdf
          </v-card>
        </v-col>
      </v-row>
    </v-content>
  </v-col>
</template>

<script>
import AppBarProfile from "./appbar/AppBarProfile.vue";
import AppBarLeft from "./appbar/AppBarLeft.vue";
import AppBarNotification from "./appbar/AppBarNotification.vue";
import AppBarShop from "./appbar/AppBarShop.vue";
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    "App-Bar-Profile": AppBarProfile,
    "App-Bar-Left": AppBarLeft,
    "App-Bar-Notification": AppBarNotification,
    "App-Bar-Shop": AppBarShop,
    apexchart: VueApexCharts,
  },
  props: ["mini"],

  data() {
    return {
      options: {
        xaxis: {
          categories: [1991, 1988],
        },
      },
      series: [
        {
          name: "PRODUCT A",
          data: [100, 55, 41, 67, 22],
        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20, 8, 13],
        },
        {
          name: "PRODUCT C",
          data: [11, 17, 15, 15, 21],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 400,
          stacked: false,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: true,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
          },
        },
        xaxis: {
          type: "datetime",
          categories: [
            "01/01/2011 GMT",
            "01/02/2011 GMT",
            "01/03/2011 GMT",
            "01/04/2011 GMT",
            "01/05/2011 GMT",
            "01/06/2011 GMT",
          ],
        },
        legend: {
          position: "left",
          offsetY: 40,
        },
        fill: {
          opacity: 1,
        },
      },

      series2: [
        {
          name: "Sales",
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
        },
      ],
      chartOptions2: {
        chart: {
          height: 350,
          type: "line",
        },
        forecastDataPoints: {
          count: 7,
        },
        stroke: {
          width: 5,
          curve: "smooth",
        },
        xaxis2: {
          type: "datetime",
          categories: [
            "1/11/2000",
            "2/11/2000",
            "3/11/2000",
            "4/11/2000",
            "5/11/2000",
            "6/11/2000",
            "7/11/2000",
            "8/11/2000",
            "9/11/2000",
            "10/11/2000",
            "11/11/2000",
            "12/11/2000",
            "1/11/2001",
            "2/11/2001",
            "3/11/2001",
            "4/11/2001",
            "5/11/2001",
            "6/11/2001",
          ],
          tickAmount: 10,
          labels: {
            formatter: function (value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), "dd MMM");
            },
          },
        },
        title: {
          text: "Forecast",
          align: "left",
          style: {
            fontSize: "16px",
            color: "#666",
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#FDD835"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100],
          },
        },
        yaxis: {
          min: -10,
          max: 40,
        },
      },
    };
  },
};
</script>


<style scoped>
.max-80 {
  max-width: 75%;
}
.max-90 {
  max-width: 90%;
}

.fa {
  font-size: 20px !important;
}


</style>