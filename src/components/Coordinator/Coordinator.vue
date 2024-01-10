<template>
    <section class="Coordinator">
        <!-- budget and privacy -->
        <el-row :gutter="10">
            <el-col :span="8"><el-card class="box-card">
                <div style="width:300px; height:150px"  id="chart1"></div>
            </el-card></el-col>
            <el-col :span="8"><el-card class="box-card" style="height:190px">
                <div>Balance:{{ Balance }}</div>
                <div>Budget: {{ Budget }}</div>
                <div><el-input style="width:50% ;margin-top:10px"></el-input> <el-button  style="width:40%" type="primary">Add</el-button></div>
                <div><el-input style="width:50% ;margin-top:10px"></el-input> <el-button style="width:40%" type="danger">Remove</el-button></div>
            </el-card></el-col>
            <el-col :span="8"><el-card class="box-card">
                <div style="width:400px; height:150px"  id="chart2"></div>
            </el-card></el-col>
        </el-row>
        <!-- algo and commision rate -->
        <el-row :gutter="10">
            <el-col :span="24"><el-card class="box-card"></el-card></el-col>
        </el-row><el-row :gutter="10">
            <el-col :span="24"><el-card class="box-card"></el-card></el-col>
        </el-row>
        <!-- chart -->
        </el-row><el-row :gutter="10">
            <el-col :span="24"><el-card class="box-card"></el-card></el-col>
        </el-row>
        <!-- Stats -->
        <el-card>
            <el-row :gutter="20">
                <el-col :span="6" v-for="item in Stats">
                    <div>
                        <el-statistic :title="item.title" group-separator=",">
                            <template slot="formatter">
                                {{ item.value }}
                            </template>
                        </el-statistic>
                    </div>
                </el-col>
            </el-row>
        </el-card>
    </section>
</template>

<script>
import * as echarts from 'echarts';
export default {
    name: 'Coordinator',
    data() {
        return {
            Balance:'5.3710',
            Budget:'2.0000',
            Stats: [
                { title: 'Today Active User', value: 1572 },
                { title: 'Today Rebate Sum', value: 37362 },
                { title: 'Today Requests', value: 4179 },
                { title: 'Today Group Plans', value: 732 }
            ],
            BudgetPct:
            [{name:'Available',value:77},
            {name:'Occupied',value:23}],
            PrivacyPct:[
                {name:'c<0.02',value:13},
                {name:'c>0.3',value:48},
                {name:'0.02<c<0.1',value:29},
                {name:'0.1<c<0.3',value:10}
            ]

        }
    },
    components: {},
    watch: {},
    mounted() {
        

        this.createPieChart('chart1',this.BudgetPct)
        this.createPieChart('chart2',this.PrivacyPct)
     },
    methods: {
        createPieChart(divName,dataArray){
            var chart = echarts.init(document.getElementById(divName));
            var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: dataArray.map(item=>item.name)
            },
            series: [
                {
                    name: 'Source',
                    type: 'pie',
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            formatter: '{d}%',
                        },
                    },
                    data: [
                        ...dataArray
                    ]
                }
            ]
        }
            chart.setOption(option)
        }
    }
}
</script>

<style scoped lang="less"></style>
