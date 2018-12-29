import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div class="home-bg full">

                <section class="main-block ">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h4>ทดสอบ</h4>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="main-block ">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <img src="photo/BESIDEKAIMOOK_Donation-01.png" height="100%" width="100%" />
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-md-12">
                                <img src="photo/BESIDEKAIMOOK_Donation-02.png" height="100%" width="100%" />
                            </div>
                        </div>
                    </div>
                </section>
                <br />

                <section class="main-block ">
                    <div class="container color-bg">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-4">
                                            <form class="form-horizontal">
                                                    <fieldset>
                                                        <legend></legend>
                                                    
                                                        <div class="form-group">
                                                            <label class="control-label" for="textinput">ชื่อ-นามสกุล</label>  
                                                            <div class="">
                                                                <input id="textinput" name="textinput" type="text"  class="form-control input-md" />
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="form-group">
                                                            <label class="control-label" for="textinput">เบอร์โทรศัพท์</label>  
                                                            <div class="">
                                                                <input id="textinput" name="textinput" type="text"  class="form-control input-md" />  
                                                            </div>
                                                        </div> 
                                                    
                                                        <div class="form-group">
                                                            <label class="control-label" for="textinput">E-mail</label>  
                                                            <div class="">
                                                                <input id="textinput" name="textinput" type="email"  class="form-control input-md" />
                                                            </div>
                                                        </div>
                                                    
                                                        <div class="form-group">
                                                            <label class="control-label" for="textarea">ที่อยู่ปัจจุบัน</label>
                                                            <div class="">                     
                                                                <textarea class="form-control" id="textarea" name="textarea"></textarea>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="form-group">
                                                            <label class="control-label" for="selectbasic"></label>
                                                            <div class="">
                                                            <select id="selectbasic" name="selectbasic" class="form-control">
                                                                <option value="1">162 บาท</option>
                                                                <option value="2">262 บาท</option>
                                                                <option value="3">462 บาท</option>
                                                                <option value="4">620 บาท</option>
                                                                <option value="5">1,062 บาท</option>
                                                                <option value="6">1,262 บาท</option>
                                                            </select>
                                                            </div>
                                                        </div>
                            
                                                        <div class="form-group">
                                                                <label class="control-label" for="textinput">ยอดโดเนททั้งหมด</label>  
                                                                <div class="">
                                                                    <input id="textinput" name="textinput" type="number"  class="form-control input-md" />
                                                                </div>
                                                        </div>
                            
                                                        <div class="form-group">
                                                            <label class="control-label" for="filebutton">หลักฐานการโอนเงิน (ภาพสลิปที่โอน)</label>
                                                            <div class="">
                                                                <input id="filebutton" name="filebutton" class="input-file" type="file" />
                                                            </div>
                                                        </div>
                            
                                                        <div class="form-group">
                                                                <label class="control-label" for="textinput">วันที่โอน</label>  
                                                                <div class="">
                                                                    <input id="textinput" name="textinput" type="number"  class="form-control input-md" />
                                                                </div>
                                                        </div>
                            
                                                        <div class="form-group">
                                                                <label class="control-label" for="textinput">เวลาที่โอน</label>  
                                                                <div class="">
                                                                    <input id="textinput" name="textinput" type="number"  class="form-control input-md" />
                                                                </div>
                                                        </div>
                            
                                                    
                                                    </fieldset>
                                                </form>  
                                    </div>

                                    <div class="col-md-8">
                                        <img src="photo/Beside_Kaimook.png" height="100%" width="100%" />
                                    </div>

                                </div>
                            
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <footer class="main-block ">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="copyright">
                                    <p>Copyright &copy; 2018 Listing. All rights reserved , Design with FanPage KAIMOOKBNK48 Thailand</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>

        )
    }

}
export default Home