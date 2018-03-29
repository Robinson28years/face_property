<template>
<div>
<div class="container-fluid">
    <div class="row example-centered">
        <div class="col-md-12 example-title">
            <h2>人员进出情况</h2>
            <p>Medium devices (desktops, 992px and up).</p>
        </div>
        <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            <ul class="timeline timeline-centered">
                <li class="timeline-item" v-for="item in items" :key="item.key">
                    <div class="timeline-info">
                        <span v-if="item.result=='未通过'">{{item.visit_time}} <span style="color:red;">{{item.result}}</span></span>
                        <span v-else>{{item.visit_time}} <span style="color:green;">{{item.result}}</span></span>
                        
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">{{item.nickname}}</h3>
                        <p>访问地址：{{item.address.building_id}}幢{{item.address.unit_id}}单元{{item.address.room_id}}号</p>
                        <p>角色：{{item.role.alias}}</p>
                        <img :src="'http://127.0.0.1:8000/api/v1/' + item.pic" class="image">
                        <!-- <p>1幢2单元302</p> -->
                        <!-- <el-row justify="center">
                        <el-col :span="11" >
                          <el-card>

                            <img :src="'http://127.0.0.1:8000/api/v1/' + item.pic" class="image">
                          </el-card>
                        </el-col>
                      </el-row> -->
                    </div>
                    
                </li>


                
                
            </ul>
        </div>
    </div>
</div>

</div>
</template>

<script>
import { fetchList } from '@/api/visit'
import baseURL from '../../../config/api'

export default {
  mounted(){
    // for(let i=0;i<20;i++){
    //   this.items.push(i);
    // }
    // this.items = ['a','b','c','d','e','f'];
    this.getList();

  },
  data(){
    return {
      picURL:baseURL+'/',
      items:[],

    }
  },
  methods:{
    
    getList() {
      fetchList(this.listQuery).then(response => {
        //   console.log(response.data.data[0].address.id)
        this.items = response.data.data.reverse();
        // this.total = response.data.total
      })
    },
  }

  
}
</script>


<style lang="scss">


  .image {
    width: 320px;
  }


$primary-color: #FF6B6B;
$primary-color-hover: scale-color($primary-color, $lightness: 32%);

body {
    color: #768390;
    background: #FFF;
    font-family: "Effra", Helvetica, sans-serif;
    padding: 0;
    -webkit-font-smoothing: antialiased;
}
h1,h2,h3,h4,h5,h6 {
    color: #3D4351;
    margin-top: 0;
}
a {
    color: $primary-color;
    &:hover {
        color: $primary-color-hover;
        text-decoration: none;
    }
}
.example-header {
    background: #3D4351;
    color: #FFF;
    font-weight: 300;
    padding: 3em 1em;
    text-align: center;
    h1 {
        color: #FFF;
        font-weight: 300;
        margin-bottom: 20px
    }
    p {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-weight: 700;
    }
}
.container-fluid {
    .row {
        padding: 0 0 4em 0;
        &:nth-child(even) {
            background: #F1F4F5;
        }
    }
}

.example-title {
    text-align: center;
    margin-bottom: 60px;
    padding: 3em 0;
    border-bottom: 1px solid #E4EAEC;
    p {
        margin: 0 auto;
        font-size: 16px;
        max-width: 400px;
    }
}

/*==================================
    TIMELINE
==================================*/

    /*-- GENERAL STYLES
    ------------------------------*/
    .timeline {
        line-height: 1.4em;
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        h1, h2, h3, h4, h5, h6 {
            line-height: inherit;
        }
    }

    /*----- TIMELINE ITEM -----*/

    .timeline-item {
        padding-left: 40px;
        position: relative;
        &:last-child {
            padding-bottom: 0;
        }
    }

    /*----- TIMELINE INFO -----*/

    .timeline-info {
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 3px;
        margin: 0 0 .5em 0;
        text-transform: uppercase;
        white-space: nowrap;
    }
    /*----- TIMELINE MARKER -----*/

    .timeline-marker {
        position: absolute;
        top: 0; bottom: 0; left: 0;
        width: 15px;
        &:before {
            background: $primary-color;
            border: 3px solid transparent;
            border-radius: 100%;
            content: "";
            display: block;
            height: 15px;
            position: absolute;
            top: 4px; left: 0;
            width: 15px;
            transition: background 0.3s ease-in-out,
                    border 0.3s ease-in-out;
        }
        &:after {
            content: "";
            width: 3px;
            background: #CCD5DB;
            display: block;
            position: absolute;
            top: 24px; bottom: 0; left: 6px;
        }
        .timeline-item:last-child &:after {
            content: none;
        }
    }
    .timeline-item:not(.period):hover .timeline-marker:before {
        background: transparent;
        border: 3px solid $primary-color;
    }

    /*----- TIMELINE CONTENT -----*/

    .timeline-content {
        padding-bottom: 40px;
        p:last-child {
            margin-bottom: 0;
        }
    }

    /*----- TIMELINE PERIOD -----*/
    
    .period {
        padding: 0;
        .timeline-info {
            display: none;
        }
        .timeline-marker {
            &:before {
                background: transparent;
                content: "";
                width: 15px;
                height: auto;
                border: none;
                border-radius: 0;
                top: 0;
                bottom: 30px;
                position: absolute;
                border-top: 3px solid #CCD5DB;
                border-bottom: 3px solid #CCD5DB;
            }
            &:after {
                content: "";
                height: 32px;
                top: auto;
            }
        }
        .timeline-content {
            padding: 40px 0 70px;
        }
        .timeline-title {
            margin: 0;
        }
    }

    /*----------------------------------------------
        MOD: TIMELINE SPLIT
    ----------------------------------------------*/

        .timeline-split {
            @media (min-width: 768px) {
                .timeline {
                    display: table;
                }
                .timeline-item {
                    display: table-row;
                    padding: 0;
                }
                .timeline-info,
                .timeline-marker,
                .timeline-content,
                .period .timeline-info {
                    display: table-cell;
                    vertical-align: top;
                }
                .timeline-marker {
                    position: relative;
                }
                .timeline-content {
                    padding-left: 30px;
                }
                .timeline-info {
                    padding-right: 30px;
                }
                .period .timeline-title {
                    position: relative;
                    left: -45px;
                }
            }
        }

    /*----------------------------------------------
        MOD: TIMELINE CENTERED
    ----------------------------------------------*/

        .timeline-centered {
            @extend .timeline-split;
            @media (min-width: 992px) {
                &,
                .timeline-item,
                .timeline-info,
                .timeline-marker,
                .timeline-content {
                    display: block;
                    margin: 0;
                    padding: 0;
                }
                .timeline-item {
                    padding-bottom: 40px;
                    overflow: hidden;
                }
                .timeline-marker {
                    position: absolute;
                    left: 50%;
                    margin-left: -7.5px;
                }
                .timeline-info,
                .timeline-content {
                    width: 50%;
                }
                > .timeline-item:nth-child(odd) .timeline-info {
                    float: left;
                    text-align: right;
                    padding-right: 30px;
                }
                > .timeline-item:nth-child(odd) .timeline-content {
                    float: right;
                    text-align: left;
                    padding-left: 30px;
                }    
                > .timeline-item:nth-child(even) .timeline-info {
                    float: right;
                    text-align: left;
                    padding-left: 30px;
                }
                > .timeline-item:nth-child(even) .timeline-content {
                    float: left;
                    text-align: right;
                    padding-right: 30px;
                }
                > .timeline-item.period .timeline-content {
                    float: none;
                    padding: 0;
                    width: 100%;
                    text-align: center;
                }
                .timeline-item.period {
                    padding: 50px 0 90px;
                }
                .period .timeline-marker:after {
                    height: 30px;
                    bottom: 0;
                    top: auto;
                }
                .period .timeline-title {
                    left: auto;
                }
            }
        }

    /*----------------------------------------------
        MOD: MARKER OUTLINE
    ----------------------------------------------*/
        
        .marker-outline {
            .timeline-marker {
                &:before {
                    background: transparent;
                    border-color: $primary-color;
                }
            }
            .timeline-item:hover .timeline-marker:before {
                background: $primary-color;
            }
        }
</style>
