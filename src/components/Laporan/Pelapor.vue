<template>
    <div>
        <div class="laporan">
        <div class="row">
            <div class="col-md-3 laporan-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                <h3>Data Pelapor</h3>
                <p>Silahkan isi data Anda (Pelapor), kami akan bantu proses laporannya.</p>
                <a href="/" @click="removeDataPelapor">
                    <input type="submit" name="" value="Kembali"/><br/>
                </a>
            </div>
            <div class="col-md-9 laporan-right">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 class="laporan-heading">Form Laporan Pelapor</h3>
                        <form 
                            class="was-validated needs-validation row laporan-form" 
                            v-on:submit.prevent="saveDataPelapor">
                            <div class="col-md-6">
                                    <div class="form-group" for="nama_pelapor">
                                        <input 
                                            type="text" 
                                            name="nama_pelapor" 
                                            id="nama_pelapor" 
                                            v-model="nama_pelapor" 
                                            class="form-control m-2" 
                                            placeholder="Nama Pelapor *"
                                            required /> 
                                    </div>
                                    <div class="form-group">
                                        <select class="form-control m-2" name="jenis_kelamin_pelapor" id="jenis_kelamin_pelapor" v-model="jenis_kelamin_pelapor" required>
                                            <option 
                                                class="hidden" 
                                                value="" 
                                                selected disabled>Jenis Kelamin *</option>
                                            <option>Laki-Laki</option>
                                            <option>Perempuan</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <input 
                                            type="date" 
                                            name="tanggal_lahir_pelapor" 
                                            id="tanggal_lahir_pelapor" 
                                            v-model="tanggal_lahir_pelapor" 
                                            class="form-control m-2"  
                                            placeholder="Tanggal Lahir Pelapor *" 
                                            required/>
                                    </div>
                                    <div class="form-group">
                                        <textarea 
                                            name="alamat_pelapor" 
                                            id="alamat_pelapor" 
                                            v-model="alamat_pelapor" 
                                            class="form-control is-invalid m-2" 
                                            placeholder="Alamat Pelapor *" 
                                            required></textarea>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input 
                                            type="number" 
                                            name="no_telp_pelapor" 
                                            id="no_telp_pelapor" 
                                            v-model="no_telp_pelapor" 
                                            minlength="10" maxlength="13" 
                                            class="form-control m-2" 
                                            placeholder="Nomor Telepon Pelapor *" 
                                            required/>
                                    </div>
                                    <div class="form-group">
                                        <input 
                                            type="email" 
                                            name="email_pelapor" 
                                            id="email_pelapor" 
                                            v-model="email_pelapor" 
                                            class="form-control m-2" 
                                            placeholder="Email Pelapor *" 
                                            required/>
                                    </div>
                                    <div class="form-group">
                                        <input 
                                            type="text" 
                                            name="nama_pembina_pelapor" 
                                            id="nama_pembina_pelapor" 
                                            v-model="nama_pembina_pelapor" 
                                            class="form-control m-2" 
                                            placeholder="Nama Pembina *" 
                                            required/>
                                    </div>
                                    <div class="form-group">
                                        <input 
                                            type="text" 
                                            name="nama_dpd_pelapor" 
                                            id="nama_dpd_pelapor" 
                                            v-model="nama_dpd_pelapor" 
                                            class="form-control m-2" 
                                            placeholder="Nama Ketua DPD Domisili *" 
                                            required/>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <label class="form-group mt-2 left-2 fix-btm-2">Tanggal Transaksi</label>
                                    <div class="form-group">
                                        <input 
                                            type="date" 
                                            name="tanggal_transaksi" 
                                            id="tanggal_transaksi" 
                                            v-model="tanggal_transaksi" 
                                            class="form-control m-2"  
                                            placeholder="Tanggal Transaksi *" 
                                            required/>
                                    </div>
                                    <label class="form-group mt-2 left-2 fix-btm-2">Total Hutang/Kerugian</label>
                                    <div class="form-group">
                                        <input 
                                            type="text" 
                                            name="total_kerugian" 
                                            id="total_kerugian" 
                                            v-model="total_kerugian" 
                                            class="form-control m-2" 
                                            placeholder="Total Hutang/Kerugian *"
                                            @change="formatPrice"
                                            required/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                </div>
                                <div class="col-md-6">
                                    <input 
                                        type="submit" 
                                        class="btnlaporan text-center font-white" 
                                        value="Selanjutnya"/>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Pelapor',
    data() {
        return {
            dataLaporan1: [],
            nama_pelapor: '',
            jenis_kelamin_pelapor: '',
            tanggal_lahir_pelapor: '',
            alamat_pelapor: '',
            no_telp_pelapor: '',
            email_pelapor: '',
            nama_pembina_pelapor: '',
            nama_dpd_pelapor: '',
            tanggal_transaksi: '',
            total_kerugian: '',
        }
    },
    methods: {
        saveDataPelapor() {
            var number = this.total_kerugian.replace(/Rp/g, '').replace('.', '').trim();

            var pelaporStored = {
                "nama_pelapor": this.nama_pelapor,
                "jenis_kelamin_pelapor": this.jenis_kelamin_pelapor,
                "tanggal_lahir_pelapor": this.tanggal_lahir_pelapor,
                "alamat_pelapor": this.alamat_pelapor,
                "no_telp_pelapor": this.no_telp_pelapor,
                "email_pelapor": this.email_pelapor,
                "nama_pembina_pelapor": this.nama_pembina_pelapor,
                "nama_dpd_pelapor": this.nama_dpd_pelapor,
                "tanggal_transaksi": this.tanggal_transaksi,
                "total_kerugian": number,   
            }
            
            const parsed = JSON.stringify(pelaporStored);
            localStorage.setItem('dataLaporan1', parsed);
            this.$router.push('/terlapor');
        },
        removeDataPelapor() {
            localStorage.removeItem('dataLaporan1')
        },
        formatPrice(input) {
            var number = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(input.target.value);
            this.total_kerugian = number;
        }
    },
    mounted() {
        if (localStorage.getItem('dataLaporan1')) {
            try {
                this.dataLaporan1 = JSON.parse(localStorage.getItem('dataLaporan1'));
                
                this.nama_pelapor = this.dataLaporan1.nama_pelapor;
                this.jenis_kelamin_pelapor = this.dataLaporan1.jenis_kelamin_pelapor;
                this.tanggal_lahir_pelapor = this.dataLaporan1.tanggal_lahir_pelapor;
                this.alamat_pelapor = this.dataLaporan1.alamat_pelapor;
                this.no_telp_pelapor = this.dataLaporan1.no_telp_pelapor;
                this.email_pelapor = this.dataLaporan1.email_pelapor;
                this.nama_pembina_pelapor = this.dataLaporan1.nama_pembina_pelapor;
                this.nama_dpd_pelapor = this.dataLaporan1.nama_dpd_pelapor;
                this.tanggal_transaksi = this.dataLaporan1.tanggal_transaksi;
                this.total_kerugian = this.dataLaporan1.total_kerugian;
            } catch(e) {
                localStorage.removeItem('dataLaporan1')
            }
        }
    },
}
</script>

<style>

</style>