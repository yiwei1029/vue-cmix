<template>
    <section class="Request">
        <el-row :gutter="10">
            <!-- 左边 -->
            <el-col :span="12">
                <!-- input -->

                <el-card>
                    <el-row v-for="input  in InputList" :gutter="20">
                        <el-col :span="15">
                            <!-- <div>{{ input.hash }}</div> -->
                            <el-popover placement="top-start" trigger="hover" :content="input.hash">
                                <el-button slot="reference" type="text">{{ input.hash.substring(0, 40) + "..."
                                }}</el-button>
                            </el-popover>
                        </el-col>
                        <el-col :span="6">
                            <el-popover disabled>
                                <el-button slot="reference" type="text">{{ input.amount }}</el-button>
                            </el-popover>
                        </el-col>
                    </el-row>
                </el-card>
                <!-- output -->
                <el-card>
                    <el-row v-for="output  in OutputList" :gutter="20">
                        <el-col :span="15">
                            <el-popover placement="top-start" trigger="hover" :content="output.hash">
                                <el-button slot="reference" type="text">{{ output.hash.substring(0, 40) + "..."
                                }}</el-button>
                            </el-popover>
                        </el-col>
                        <el-col :span="6">
                            <el-popover disabled>
                                <el-button slot="reference" type="text">{{ output.amount }}</el-button>
                            </el-popover>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <!-- 右边 -->
            <el-col :span="9">
                <el-card>
                    <el-row>
                        <div class="left-right"><span>Block Height</span><span style="width:50%">{{ 78 }}</span></div>
                        <div class="left-right"><span>Block Hash</span><span style="width:50%">{{ '0x4b...fe5' }}</span>
                        </div>
                        <div class="left-right"><span>Time</span><span style="width:50%">{{ '2023-10-23 23:59:59'
                        }}</span></div>
                    </el-row>

                </el-card>
                <!-- chart -->
                <el-card>
                    <div id="chart1" style="width:100%; height:300px"></div>
                </el-card>
                <!-- form -->
                <el-card>

                    <div class="left-right">
                        <span>Input</span>
                        <el-select v-model="InputCurrentPick" placeholder="select an output">
                            <el-option v-for="item in InputListToSelect" :key="item.hash" :value="item.hash">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="left-right">
                        <span>Output</span>
                        <el-select v-model="OnputCurrentPick" placeholder="select an output">
                            <el-option v-for="item in OutputListToSelect" :key="item.hash" :value="item.hash">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="left-right">
                        <span><i class="iconfont icon-jisuanqi"></i></span>
                        <el-button style="padding:14px">Calculate the probability</el-button>
                    </div>

                </el-card>
            </el-col>
        </el-row>
    </section>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: 'Request',
    data() {
        return {
            InputList: [
                { hash: 'bc1quqfl65xqtkprhrygpdpeg4r7q20zyaq8xvxd3a', amount: 0.00571223 },
                { hash: 'bc1qnalwjznls42dzvaw4m5u48td032692aslqwg9m', amount: 0.00127342 },
                { hash: 'bc1q5t94hycpjv2uegcchfr7q30tsuhq8wd2u90cg4', amount: 0.00349666 },
                { hash: 'bc1qm4ztr7257hlqk3x670zr6maz36qnehczuetqrn', amount: 0.00428200 }

            ],
            OutputList: [
                { hash: 'bc1quqfl65xqtkprhrygpdpeg4r7q20zyaq8xvxd3a', amount: 0.00571223 },
                { hash: 'bc1qnalwjznls42dzvaw4m5u48td032692aslqwg9m', amount: 0.00127342 },
                { hash: 'bc1q5t94hycpjv2uegcchfr7q30tsuhq8wd2u90cg4', amount: 0.00349666 },
                { hash: 'bc1qm4ztr7257hlqk3x670zr6maz36qnehczuetqrn', amount: 0.00428200 }

            ], InputListToSelect: [
                { hash: 'bc1quqfl65xqtkprhrygpdpeg4r7q20zyaq8xvxd3a', amount: 0.00571223 },
                { hash: 'bc1qnalwjznls42dzvaw4m5u48td032692aslqwg9m', amount: 0.00127342 },
                { hash: 'bc1q5t94hycpjv2uegcchfr7q30tsuhq8wd2u90cg4', amount: 0.00349666 },
                { hash: 'bc1qm4ztr7257hlqk3x670zr6maz36qnehczuetqrn', amount: 0.00428200 }

            ],
            OutputListToSelect: [
                { hash: 'bc1quqfl65xqtkprhrygpdpeg4r7q20zyaq8xvxd3a', amount: 0.00571223 },
                { hash: 'bc1qnalwjznls42dzvaw4m5u48td032692aslqwg9m', amount: 0.00127342 },
                { hash: 'bc1q5t94hycpjv2uegcchfr7q30tsuhq8wd2u90cg4', amount: 0.00349666 },
                { hash: 'bc1qm4ztr7257hlqk3x670zr6maz36qnehczuetqrn', amount: 0.00428200 }

            ],
            InputCurrentPick: '',
            OnputCurrentPick: '',
            OutputStats: [
                { OutputAmount: 1, Stats: 3 },
                { OutputAmount: 3, Stats: 2 },
            ]
        }
    },
    components: {},
    watch: {},
    mounted() {
        this.createChart('chart1', this.OutputStats)
    },
    methods: {
        createChart(divName, dataArr) {
            var Chart = echarts.init(document.getElementById(divName))
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{c}"
                },
                // legend: {
                //     orient: 'vertical',
                //     x: 'left',
                //     left: 5
                // },
                xAxis: {
                    data: dataArr.map(item => item.OutputAmount),
                    name: "Amounts"
                },
                yAxis:
                {
                    name: '#Outputs',

                }
                ,
                series: [{
                    type: 'bar',
                    data: dataArr.map(item => item.Stats),
                    itemStyle: {
                        borderRadius: 5,
                        borderWidth: 1,
                        borderType: 'solid',
                        borderColor: '#73c0de',
                        shadowColor: '#5470c6',
                        shadowBlur: 3,
                        color: '#91cc75',
                        barWidth: '20%'
                    }
                }]
            }
            Chart.setOption(option)
        }
    }
}
</script>

<style scoped lang="less">
.el-col {
    overflow: hidden;
    text-overflow: ellipsis;
}

.el-card {
    margin-bottom: 20px;
}

.left-right {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    // align-items: stretch;
    align-items: center;

    :first-child {
        box-sizing: border-box;

    }

    :last-child {
        box-sizing: border-box;
    }
}

.el-input {
    width: 50%;
}
</style>

