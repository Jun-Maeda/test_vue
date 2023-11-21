<template>
  <v-card>
    <v-tabs
        v-model="tab"
        bg-color="primary"
    >
      <v-tab value="one">ラジオ</v-tab>
      <v-tab value="two">スイッチ</v-tab>
      <v-tab value="three">テキストエリア</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <v-container fluid>
            <v-row>
              <v-col
                  cols="12"
                  sm="6"
                  md="6"
              >
                <v-radio-group
                    v-model="ex7"
                    column
                >
                  <v-radio
                      label="red"
                      color="red"
                      value="red"
                  ></v-radio>
                  <v-radio
                      label="red-darken-3"
                      color="red-darken-3"
                      value="red-darken-3"
                  ></v-radio>
                  <v-radio
                      label="indigo"
                      color="indigo"
                      value="indigo"
                  ></v-radio>
                  <v-radio
                      label="indigo-darken-3"
                      color="indigo-darken-3"
                      value="indigo-darken-3"
                  ></v-radio>
                  <v-radio
                      label="orange"
                      color="orange"
                      value="orange"
                  ></v-radio>
                  <v-radio
                      label="orange-darken-3"
                      color="orange-darken-3"
                      value="orange-darken-3"
                  ></v-radio>
                </v-radio-group>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="6"
              >
                <v-radio-group
                    v-model="ex8"
                    column
                >
                  <v-radio
                      label="primary"
                      color="primary"
                      value="primary"
                  ></v-radio>
                  <v-radio
                      label="secondary"
                      color="secondary"
                      value="secondary"
                  ></v-radio>
                  <v-radio
                      label="success"
                      color="success"
                      value="success"
                  ></v-radio>
                  <v-radio
                      label="info"
                      color="info"
                      value="info"
                  ></v-radio>
                  <v-radio
                      label="warning"
                      color="warning"
                      value="warning"
                  ></v-radio>
                  <v-radio
                      label="error"
                      color="error"
                      value="error"
                  ></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>

        <v-window-item value="two">
          <v-container fluid>
            <v-row>
              <v-col cols="6">
                <v-switch
                    color="primary"
                    :model-value="true"
                    label="on"
                ></v-switch>
              </v-col>
              <v-col cols="6">
                <v-switch
                    color="primary"
                    :model-value="false"
                    label="off"
                ></v-switch>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6">
                <v-switch
                    color="primary"
                    :model-value="true"
                    disabled
                    label="on disabled"
                ></v-switch>
              </v-col>
              <v-col cols="6">
                <v-switch
                    color="primary"
                    :model-value="false"
                    disabled
                    label="off disabled"
                ></v-switch>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6">
                <v-switch
                    loading="warning"
                    :model-value="true"
                    label="on loading"
                ></v-switch>
              </v-col>
              <v-col cols="6">
                <v-switch
                    :model-value="false"
                    loading="warning"
                    label="off loading"
                ></v-switch>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>

        <v-window-item value="three">
          <v-container fluid>
            <v-textarea
                counter
                label="文字数制限"
                :rules="rules"
            />
            <v-textarea
                label="高さ固定"
                no-resize
                rows="2"
            ></v-textarea>
          </v-container>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    ex7: 'red',
    ex8: 'primary',
    rules: [v => v.length <= 25 || '25文字までです'],
  }),
}
</script>
