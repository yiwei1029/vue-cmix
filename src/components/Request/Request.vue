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
            <el-col :span="12">
                <el-card></el-card></el-col>
        </el-row>
    </section>
</template>

<script>
export default {
    name: 'Request',
    data() {
        return {
            InputList: [
                { hash: 'bc1quqfl65xqtkprhrygpdpeg4r7q20zyaq8xvxd3a', amount: 0.00571223 },
                { hash: 'bc1qnalwjznls42dzvaw4m5u48td032692aslqwg9m', amount: 0.00127342 },
                { hash: 'bc1q5t94hycpjv2uegcchfr7q30tsuhq8wd2u90cg4', amount: 0.00349666 },
                { hash: 'bc1qm4ztr7257hlqk3x670zr6maz36qnehczuetqrn', amount: 0.004282 }

            ],
            OutputList: [
                { hash: 'bc1quqfl65xqtkprhrygpdpeg4r7q20zyaq8xvxd3a', amount: 0.00571223 },
                { hash: 'bc1qnalwjznls42dzvaw4m5u48td032692aslqwg9m', amount: 0.00127342 },
                { hash: 'bc1q5t94hycpjv2uegcchfr7q30tsuhq8wd2u90cg4', amount: 0.00349666 },
                { hash: 'bc1qm4ztr7257hlqk3x670zr6maz36qnehczuetqrn', amount: 0.004282 }

            ]
        }
    },
    components: {},
    watch: {},
    mounted() { },
    methods: {}
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
</style>
