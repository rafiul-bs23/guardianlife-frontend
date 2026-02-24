import AgentListHeader from "./components/AgentListHeader";
import AgentTable from "./components/AgentTable";
import { useAgentList } from "./hooks/useAgentList";

const AgentList = () => {
    const { agents, pagination, is_loading, error, current_page, go_to_page } = useAgentList();

    return (
        <main className="min-h-screen bg-white">
            <AgentListHeader />

            <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Section Title */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">
                        Agent List
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Browse all licensed Guardian Life agents.
                    </p>
                </div>

                {/* Table */}
                <AgentTable
                    agents={agents}
                    pagination={pagination}
                    is_loading={is_loading}
                    error={error}
                    current_page={current_page}
                    on_page_change={go_to_page}
                />
            </section>
        </main>
    );
};

export default AgentList;
