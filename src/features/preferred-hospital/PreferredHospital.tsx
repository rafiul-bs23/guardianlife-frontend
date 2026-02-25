import PreferredHospitalHeader from "./components/PreferredHospitalHeader";
import HospitalFilter from "./components/HospitalFilter";
import HospitalTable from "./components/HospitalTable";
import { usePreferredHospital } from "./hooks/usePreferredHospital";

const PreferredHospital = () => {
    const {
        filtered_hospitals,
        is_loading,
        error,
        active_type,
        frontend_filters,
        division_options,
        district_options,
        area_options,
        country_options,
        set_active_type,
        set_frontend_filters,
        reset_filters,
    } = usePreferredHospital();

    return (
        <main className="min-h-screen bg-white">
            <PreferredHospitalHeader />

            <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Section Title */}
                <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-primary">
                        Find Hospital and Diagnostics
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Browse Guardian Life's network of preferred hospitals and diagnostic centres.
                    </p>
                </div>

                {/* Tabs + Filters */}
                <HospitalFilter
                    active_type={active_type}
                    frontend_filters={frontend_filters}
                    division_options={division_options}
                    district_options={district_options}
                    area_options={area_options}
                    country_options={country_options}
                    on_type_change={set_active_type}
                    on_filter_change={set_frontend_filters}
                    on_reset={reset_filters}
                />

                {/* Table */}
                <HospitalTable
                    hospitals={filtered_hospitals}
                    is_loading={is_loading}
                    error={error}
                    active_type={active_type}
                />
            </section>
        </main>
    );
};

export default PreferredHospital;
