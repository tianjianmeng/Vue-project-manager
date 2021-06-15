<template>
	<div id="app">
		<p>任务管理系统</p>
		<p></p>
		<el-dialog title="添加" :visible.sync="dialogVisible" width="500px" :before-close="handleClose" :close-on-press-escape="false"
		 :close-on-click-modal="false">
			<el-form :model="form" label-position="labelPosition">
				<el-form-item label="任务名称">
					<el-input style="width:220px" v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="任务描述">
					<el-input style="width:220px" v-model="form.descrtption"></el-input>
				</el-form-item>
				<el-form-item label="开始日期">
					<el-date-picker class="date-picker" v-model="form.startdate" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"
					 format="yyyy-MM-dd" />
				</el-form-item>
				<el-form-item label="结束日期">
					<el-date-picker class="date-picker" v-model="form.enddate" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"
					 format="yyyy-MM-dd" />
				</el-form-item>
				<el-form-item label="紧急程度">
					<el-radio v-model="form.radio" label="重要任务">重要任务</el-radio>
					<el-radio v-model="form.radio" label="普通任务">普通任务</el-radio>
				</el-form-item>
			</el-form>
			<el-button @click="saveTask">确定</el-button>
		</el-dialog>
		<el-dialog title="编辑" :visible.sync="dialogVisible2" width="500px" :before-close="handleClose" :close-on-press-escape="false"
		 :close-on-click-modal="false">
			<el-form :model="form2" label-position="labelPosition">
				<el-form-item label="任务名称">
					<el-input style="width:220px" v-model="form2.name"></el-input>
				</el-form-item>
				<el-form-item label="任务描述">
					<el-input style="width:220px" v-model="form2.descrtption"></el-input>
				</el-form-item>
				<el-form-item label="开始日期">
					<el-date-picker class="date-picker" v-model="form2.startdate" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"
					 format="yyyy-MM-dd" />
				</el-form-item>
				<el-form-item label="结束日期">
					<el-date-picker class="date-picker" v-model="form2.enddate" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"
					 format="yyyy-MM-dd" />
				</el-form-item>
				<el-form-item label="紧急程度">
					<el-radio v-model="form2.radio" label="重要任务">重要任务</el-radio>
					<el-radio v-model="form2.radio" label="普通任务">普通任务</el-radio>
				</el-form-item>
			</el-form>
			<el-button @click="editTask">确定修改</el-button>
		</el-dialog>
		<div id='table'>
			<el-table :data="todoData" style="width: 100%">
				<el-table-column prop="startdate" label="开始日期" min-width="22%">
					<template slot-scope="scope">
						<i class="el-icon-time"></i>
						<span style="margin-left: 10px">{{ scope.row.startdate }}</span>
					</template>
				</el-table-column>
				<el-table-column prop="startdate" label="结束日期" min-width="22%">
					<template slot-scope="scope">
						<i class="el-icon-time"></i>
						<span style="margin-left: 10px">{{ scope.row.enddate }}</span>
					</template>
				</el-table-column>
				<el-table-column prop="name" label="任务名称" min-width="20%">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
							<p>任务名词: {{ scope.row.name }}</p>
							<p>任务描述: {{ scope.row.descrtption }}</p>
							<p>紧急程度: {{ scope.row.radio }}</p>
							<div slot="reference" class="name-wrapper">
								<el-tag size="medium">{{ scope.row.name }}</el-tag>
							</div>
						</el-popover>
					</template>
				</el-table-column>
				<el-table-column label="完成度" min-width="16%">
					<div class="block">
					    <el-slider v-model="value1" :format-tooltip="formatTooltip"></el-slider>
					  </div>
				</el-table-column>
				<el-table-column label="操作" min-width="26%">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">确定完成</el-button>
						<el-button type="danger" icon="el-icon-delete" circle @click="indeedDelete(scope.$index, scope.row)"></el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<p></p>
		<el-button type="primary" round @click="dialogVisible = true">添加</el-button>
		<el-button type="primary" round @click="show = !show">查看已完成</el-button>
		<p>已完成任务</p>
		<div style="width: 100%">
			<transition name="el-fade-in-linear">
				<div v-show="!show" class="transition-box">
					<el-table :data="finished" style="width: 100%">
						<el-table-column prop="startdate" label="开始日期" min-width="22%">
							<template slot-scope="scope">
								<i class="el-icon-time"></i>
								<span style="margin-left: 10px">{{ scope.row.startdate }}</span>
							</template>
						</el-table-column>
						<el-table-column prop="startdate" label="结束日期" min-width="22%">
							<template slot-scope="scope">
								<i class="el-icon-time"></i>
								<span style="margin-left: 10px">{{ scope.row.enddate }}</span>
							</template>
						</el-table-column>
						<el-table-column prop="name" label="任务名称" min-width="56%">
							<template slot-scope="scope">
								<el-popover trigger="hover" placement="top">
									<p>任务名词: {{ scope.row.name }}</p>
									<p>任务描述: {{ scope.row.descrtption }}</p>
									<p>紧急程度: {{ scope.row.radio }}</p>
									<div slot="reference" class="name-wrapper">
										<el-tag size="medium">{{ scope.row.name }}</el-tag>
									</div>
								</el-popover>
							</template>
						</el-table-column>
					</el-table>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: "",
					startdate: "",
					enddate: "",
					radio: ''
				},
				form2: {
					name: "",
					startdate: "",
					enddate: "",
					radio: ''
				},
				drawer: false,
				direction: 'ttb',
				todoData: [],
				dialogVisible: false,
				dialogVisible2: false,
				value1: 0,
				show: true,
				finished: [],
				index: 0
			}
		},
		methods: {
			editTask() {
				this.todoData.splice(this.index, 1, this.form2);
				this.dialogVisible2 = false;
			},
			handleEdit(index, row) {
				this.dialogVisible2 = true;
				this.form2 = Object.assign({}, row);
				this.index = index;
			},
			handleDelete(index, row) {
				this.finished.unshift(row);
				this.todoData.splice(index, 1);
			},
			indeedDelete(index, row) {
				this.todoData.splice(index, 1);
			},
			saveTask() {
				this.todoData.push(this.form);
				this.form = {
					name: "",
					descrtption: "",
					startdate: "",
					enddate: "",
					radio: ""
				};
				console.log(this.todoData.length);
				this.dialogVisible = false;
			},
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			},
			formatTooltip(val) {
			        return val;
			}
		}
	}
</script>
<style>
	.el-table .warning-row {
		background: oldlace;
	}

	.el-table .success-row {
		background: #f0f9eb;
	}
</style>
